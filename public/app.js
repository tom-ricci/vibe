const e = React.createElement;

function App() {
  const [vibes, setVibes] = React.useState([]);
  const [message, setMessage] = React.useState('');

  const loadVibes = async () => {
    const res = await fetch('/api/vibes');
    const data = await res.json();
    setVibes(data);
  };

  const submitVibe = async () => {
    if (!message.trim()) return;
    const res = await fetch('/api/vibes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (res.ok) {
      setMessage('');
      loadVibes();
    }
  };

  React.useEffect(() => {
    loadVibes();
  }, []);

  return e('div', null,
    e('h1', null, 'Vibe Board'),
    e('div', null,
      e('input', {
        value: message,
        onChange: (ev) => setMessage(ev.target.value),
        placeholder: 'Share your vibe...'
      }),
      e('button', { onClick: submitVibe }, 'Send')
    ),
    e('ul', null,
      vibes.map((vibe, idx) =>
        e('li', { key: idx }, `${vibe.date}: ${vibe.message}`)
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(e(App));
