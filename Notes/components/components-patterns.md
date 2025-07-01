# 🧩 React Component Patterns

A quick reference for reusable component patterns and best practices in React (JS/TS). Useful for scaling UI systems and writing clean, testable code.

---

## 🏗️ 1. Functional Component with Props

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

## ✅ Use destructured props
## ✅ Stateless and readable

📦 Container + Presentational Pattern
Container (logic & data fetching):
function UserContainer() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser().then(setUser);
  }, []);
  
  return <UserCard user={user} />;
}

Presentational (UI only):
function UserCard({ user }) {
  if (!user) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}

✅ Separation of concerns
✅ Easy to test & reuse

🎛️ Controlled Component (Form Input)
function EmailInput({ value, onChange }) {
  return (
    <input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

✅ Good for form state control
✅ Pairs well with form libraries like react-hook-form

form

📋 Compound Components Pattern
jsx
function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeIndex,
      onClick: () => setActiveIndex(index),
    })
  );
}

Tabs.Tab = function Tab({ isActive, onClick, children }) {
  return (
    <button onClick={onClick} className={isActive ? 'active' : ''}>
      {children}
    </button>
  );
};

✅ Shared logic without prop drilling
✅ Flexible UI composition

🧪 Testable Component Pattern
function Alert({ message }) {
  return <div role="alert">{message}</div>;
}

✅ Semantic role for accessibility
✅ Easier targeting in unit tests (getByRole)

🔁 Render Props (legacy but useful)
function DataFetcher({ children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  return children(data);
}

// Usage:
<DataFetcher>
  {(data) => <p>{data ? data.title : 'Loading...'}</p>}
</DataFetcher>

✅ Great for reusable logic
⚠️ May be less readable vs. hooks or custom hooks

🧵 Bonus: Tailwind + Component
function Badge({ label }) {
  return (
    <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">
      {label}
    </span>
  );
}

✅ Self-contained Tailwind styles
✅ Portable and theme-friendly