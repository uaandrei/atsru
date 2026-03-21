# Tailwind Styling Skill

TRIGGER when: the user asks about styling, CSS, or when writing/reviewing component code that applies visual styles.

## Rules

- Do not write CSS in constants (no CSS string literals, no CSS-in-JS objects, no `styled` wrappers)
- Use only Tailwind CSS utility classes for all styling

## Why

- CSS stored in constants breaks IntelliSense — class name autocomplete and hover docs only work on inline Tailwind classes
- Keeping styles inline as Tailwind classes makes it easy to scan and modify styles without leaving the component
- Consistent styling approach across the entire codebase

## Examples

**Wrong — CSS in a constant:**
```ts
const cardStyles = `
  background-color: white;
  border-radius: 8px;
  padding: 16px;
`;

const buttonClass = "bg-blue-500 hover:bg-blue-600";

const styles = {
  container: { display: "flex", gap: "1rem" },
};
```

**Correct — Tailwind classes inline:**
```tsx
const Card = () => (
  <div className="bg-white rounded-lg p-4">
    ...
  </div>
);

const Button = () => (
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    Click
  </button>
);
```

## Applies to

- All visual styling in React components
- Layout, spacing, color, typography, borders, shadows
- Responsive and state variants (`sm:`, `hover:`, `dark:`, etc.)

## Does NOT apply to

- Dynamic style values that cannot be expressed as static Tailwind classes (e.g. an inline `style` prop for a JS-calculated pixel value like `style={{ width: dynamicWidth }}`)
- Tailwind `theme()` references inside `index.css` for global base styles

## Action

When you see CSS written in constants, string variables, or CSS-in-JS objects, convert the styles to inline Tailwind utility classes on the element. Remove the constant. Do not change component logic.
