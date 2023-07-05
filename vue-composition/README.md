# Vue Composition API

### What is the composition API?

The composition API is a feature in Vue 3 which gives us another way to write our components
More specifically, the script block in a component.

Options API - data(), computed properties, methods, watchers & lifecycle hooks

What we've learned so far is the Options API which is one way to build components in Vue

The other way is to use the __Composition API__

### Why composition API?

1. vue projects become hard to manage as they grew in size and complexity

With the options API, components are organizes using options such as data, computed properties, methods, created, mounted and so on.

Logic isn't really grouped by feature, which can make it hard to read through a large and complex component file.

2. Re-using logic across components become difficult.


The Composition API allows us to encapsulate one piece of functionality so that you can use it in different components throughtout the application.
