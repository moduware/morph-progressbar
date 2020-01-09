# morph-button

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

Morph Components are now changing from polymer base class to lit-element base class. Most of the components `master` branch are now using lit-element. Most of the publish Morph Components on the npm registry are also using lit-element as base class.



## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

  ```html

  <template>
    <morph-progressbar progress="${this.percent}"></morph-progressbar>
  </template>

  ```

## Attributes

|     Custom Attribute    |   Type  |               Description               | Default |
|:-----------------------:|:-------:|:---------------------------------------:|:-------:|
<<<<<<< HEAD
|           **`progress`**           | Number | Shows the percentage of progress  |  0  |
=======
|           **`big`**           | Boolean | Identifies if the button is big.        |  False  |
|          **`filled`**         | Boolean | Identifies if the button is filled.     |  False  |
|          **`flat`**           | Boolean | Identifies if the button has no rounded corners.     |  False  |
|          **`color`**          |  String | Identifies the color of the button      | 'blue'  |
|   **`active`**<br> <sub>IOS only</sub>   | Boolean | Shows if the button is in active state. |  False  |
| **`rounded`**<br> <sub>IOS only</sub>  | Boolean | Identifies if the button is rounded.    |  False  |
| **`raised`**<br> <sub>Android only</sub> | Boolean | Identifies if the button is raised.     |  False  |
| **`disabled`**<br> <sub>Android only</sub> | Boolean | Identifies if the button is disabled.     |  False  |

- To use default colors, include `morph-shared-colors` in the `morph-button`


-For IOS platform;
>>>>>>> 001f10efc038a17aeb93c9ca9ea453b07711ac99


## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md
