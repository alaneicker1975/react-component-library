The Search component is a styled form field that takes user input and returns a search query on submit.

```jsx
import { Search } from '@atomikui/core';

<Search
  onSubmit={(value) => console.log(value)}
  shape="pill"
  placeholder="Search"
/>;
```
