import { useState } from 'react'
import { TOPICS } from './shared/TOPICS'

// 1. Component Architecture: Header, TopicList, TopicCard
const Header = () => (
<header style={styles.header}>
<h1 style={styles.title}>React Learning Tracker</h1>
<p style={styles.subtitle}>Week 1 & 2 Concepts</p>
</header>
)

const TopicCard = ({ topic, onToggle }) => (
<div style={{
...styles.card,
backgroundColor: topic.isCompleted ? '#e6fffa' : '#ffffff', // 6. Conditional Styling
borderColor: topic.isCompleted ? '#4fd1c5' : '#e2e8f0'
}}>
<div style={styles.cardContent}>
<div>
<h3 style={{
...styles.topicTitle,
textDecoration: topic.isCompleted ? 'line-through' : 'none',
color: topic.isCompleted ? '#38a169' : '#2d3748'
}}>
{topic.title}
</h3>
<span style={styles.weekBadge}>Week {topic.week}</span>
</div>

{/* 5. Interactivity: Toggle Button */}
<button
onClick={() => onToggle(topic.id)}
style={{
...styles.button,
backgroundColor: topic.isCompleted ? '#38a169' : '#3182ce',
}}
>
{topic.isCompleted ? '✓ Done' : 'Mark Done'}
</button>
</div>
</div>
)

const TopicList = ({ topics, onToggle }) => (
<div style={styles.listContainer}>
{/* 4. Lists & Keys: Map through topics */}
{topics.map(topic => (
<TopicCard
key={topic.id}
topic={topic}
onToggle={onToggle}
/>
))}
</div>
)

function App() {
// 2. State Management: useState for topics array
const [topics, setTopics] = useState(TOPICS)

// Interactivity: Update function logic
const toggleTopic = (id) => {
setTopics(currentTopics =>
currentTopics.map(topic =>
topic.id === id
? { ...topic, isCompleted: !topic.isCompleted }
: topic
)
)
}

return (
<div style={styles.app}>
<Header />
{/* 3. Data Flow: passing state and handler down via props */}
<TopicList topics={topics} onToggle={toggleTopic} />
</div>
)
}

// Clean, modern CSS-in-JS (Inline Styles)
const styles = {
app: {
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
backgroundColor: '#f7fafc',
minHeight: '100vh',
paddingBottom: '40px'
},
header: {
backgroundColor: '#2b6cb0',
color: 'white',
padding: '2rem 1rem',
textAlign: 'center',
marginBottom: '2rem',
boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
},
title: {
margin: 0,
fontSize: '2.5rem',
fontWeight: '700'
},
subtitle: {
margin: '0.5rem 0 0',
opacity: 0.9,
fontSize: '1.1rem'
},
listContainer: {
maxWidth: '600px',
margin: '0 auto',
padding: '0 1rem'
},
card: {
borderRadius: '8px',
padding: '1.5rem',
marginBottom: '1rem',
borderWidth: '1px',
borderStyle: 'solid',
boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
transition: 'all 0.2s ease',
display: 'flex',
flexDirection: 'column'
},
cardContent: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
gap: '1rem'
},
topicTitle: {
margin: '0 0 0.5rem',
fontSize: '1.25rem'
},
weekBadge: {
backgroundColor: '#edf2f7',
color: '#4a5568',
padding: '0.25rem 0.75rem',
borderRadius: '9999px',
fontSize: '0.875rem',
fontWeight: '600'
},
button: {
color: 'white',
border: 'none',
padding: '0.5rem 1rem',
borderRadius: '6px',
cursor: 'pointer',
fontWeight: '600',
transition: 'background-color 0.2s',
minWidth: '100px'
}
}

export default App