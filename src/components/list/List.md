Lists are be used to organize information. They can be non-sequential or ordered.

### Default List

```jsx
import { List, ListItem } from '@alaneicker/react-component-library';

<List>
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Bulleted List

```jsx
import { List, ListItem } from '@alaneicker/react-component-library';

<List type="bulleted">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Ordered List

```jsx
import { List, ListItem } from '@alaneicker/react-component-library';

<List type="ordered">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### Horizontal List

```jsx
import { List, ListItem } from '@alaneicker/react-component-library';

<List type="horizontal">
  <ListItem>Apple</ListItem>
  <ListItem>Orange</ListItem>
  <ListItem>Banana</ListItem>
  <ListItem>Mango</ListItem>
</List>;
```

### List Alignment

```jsx
import { List, ListItem } from '@alaneicker/react-component-library';

<>
  <List type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="center" type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="right" type="horizontal">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="center">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
  <List align="right">
    <ListItem>Apple</ListItem>
    <ListItem>Orange</ListItem>
    <ListItem>Banana</ListItem>
    <ListItem>Mango</ListItem>
  </List>
</>;
```