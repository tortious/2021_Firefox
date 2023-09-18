# 2021_Firefox
Updated config settings &amp; possibilities for Firefox. This includes all file types (css; uc.js; js; etc) and other tips and tricks, including about:config tweaks


[Link](https://github.com/tortious/2019Firefox) to previous repo.

[Profile Folder]

```plaintext
[Profile Folder]
└── chrome
    ├── chrome
    ├── src
    │   ├── user-chrome
    │   ├── user-content
    │   ├── user-chrome.scss
    │   └── user-content.scss
    ├── package-lock.json
    ├── package.json
    ├── userChrome.css
    └── userContent.css
```
#### Available preferences

<table>
  <tr>
    <th>Preference</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>userChrome.system-accent-colors</td>
    <td>Set the accent color as your system accent color</td>
  </tr>
  <tr>
    <td>userChrome.default-theme-colors</td>
    <td>(Experimental) Use default firefox colors</td>
  </tr>
  <tr>
    <td>userChrome.dracula-theme-colors</td>
    <td><img src="assets/preview-dracula.png" alt="preview-dracula"></img></td>
  </tr>
  <tr>
    <td>userChrome.github-theme-colors</td>
    <td><img src="assets/preview-github.png" alt="preview-github"></img></td>
  </tr>
  <tr>
    <td>userChrome.macos-buttons-right</td>
    <td>(Experimental) right side macOS like buttons for Windows</td>
  </tr>
  <tr>
    <td>userChrome.macos-buttons-left</td>
    <td>(Experimental) left side macOS like buttons for Windows</td>
  </tr>
</table>

Additionally, if you want to change some colors, you can change the value of the variables in the following files:

- `user-chrome.css` for the browser shell;
- `user-content.css` for the content part (e.g. the "New tab" page);

Follow this steps:

1. Open the css file in a text editor
2. Find the desired variable
3. Change the value, for example, set the accent color to red: --mf-accent-color: #ea4335;
4. Save the file and restart Firefox to apply changes

#### Available variables

<table>
  <tr>
    <th>Variable name</th>
    <th>Description</th>
    <th>Default value</th>
  </tr>
  <tr>
    <td>--mf-accent-color</td>
    <td>accent color</td>
    <td>#8ab4f8</td>
  </tr>
  <tr>
    <td>--mf-background-color-0</td>
    <td>dark tones</td>
    <td>#202124</td>
  </tr>
  <tr>
    <td>--mf-background-color-50</td>
    <td>middle tones</td>
    <td>#292a2d</td>
  </tr>
  <tr>
    <td>--mf-background-color-100</td>
    <td>light tones</td>
    <td>#35363a</td>
  </tr>
  <tr>
    <td>--mf-text-primary</td>
    <td>main text color</td>
    <td>#e8eaed</td>
  </tr>
  <tr>
    <td>--mf-text-secondary</td>
    <td>secondary text color</td>
    <td>#9aa0a6</td>
  </tr>
  <tr>
    <td>--mf-text-on-accent</td>
    <td>text on primary button</td>
    <td>#202124</td>
  </tr>
  <tr>
    <td>--mf-menu-border-color</td>
    <td>controls border color</td>
    <td>#3c4043</td>
  </tr>
  <tr>
    <td>--mf-content-separator-color</td>
    <td>separator line between browser and content area</td>
    <td>#606164</td>
  </tr>
  <tr>
    <td>--mf-selection-text-color</td>
    <td>text selection color</td>
    <td>#fff</td>
  </tr>
  <tr>
    <td>--mf-selection-background-color</td>
    <td>selection background color</td>
    <td>#4285f4</td>
  </tr>
</table>


