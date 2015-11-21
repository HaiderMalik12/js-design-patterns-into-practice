# JS Design patterns into practice

> The Adapter Pattern

We all know that a public API should never change once it's been released. But that doesn't mean it doesn't ever happen. With the Adapter pattern, we can make as many changes to our API internally as we wish, and have the public interface adapted to the internal API.

This pattern is used to convert one interface into another. In JavaScript an interface is the methods and properties exposed by an object, the things that we use to interact with it. This pattern is useful when something changes and we don't  want to have to go through our entire code base in order to update how the rest of the code uses the thing that is changed. An adapter isn't always suitable and if the thing being changed isn't widely used throughout your application it maybe just as easy to refactor any code that does use it, as it would be to create the adapter in the first place.

**Features**

* Convert one interface onto another
* An object's interface is its properties and methods
* Used to avoid extensive refactoring when a dependency changes
* Use only when necessary


**Summary**

* 
