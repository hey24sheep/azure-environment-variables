# Azure Environment Variables Extension

[![](https://img.shields.io/badge/hey24sheep.com-202124.svg?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAAAcCAMAAAAURxzFAAAADFBMVEUAAAAbvfUcvfUcvfXEslmQAAAAA3RSTlMA4PgXbk0cAAAATElEQVR42u3RgQbAMAyE4dvu%2Fd95Y%2FiHkRyEkUPTK5%2BqajMZ32FH00kriWltYkqDsHJekmd8AQiBvPWfSPH8iPhQcEv0lYycCDGWzQW5CAN5SL8q5AAAAABJRU5ErkJggg%3D%3D)](https://hey24sheep.com)

![](https://img.shields.io/visual-studio-marketplace/release-date/hey24sheep.envar?color=green&style=flat-square)
![](https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/hey24sheep.envar?style=flat-square)
![](https://img.shields.io/visual-studio-marketplace/last-updated/hey24sheep.envar?style=flat-square)
![](https://img.shields.io/visual-studio-marketplace/r/hey24sheep.envar?color=green&style=flat-square)
![](https://img.shields.io/visual-studio-marketplace/v/hey24sheep.envar?label=current%20version&style=flat-square)

<a href="https://ko-fi.com/J3J6Q1QXE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/buymeacoffee-F5E800.svg?style=for-the-badge&logoColor=white&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwABOvYAATr2ATqxVzoAAAAHdElNRQfnAhALDBqwztzyAAADc0lEQVRo3u2YW0hUQRjHf3tRu5FmNytKSO2qkGKmFWRBURFdBIsgepEi6NGHeowg6K2XqCfBfPHFBH3oihaKRiVKiaHlRnbVzPJSu+u6u6cH181zzuzZOVurPZz/sMvOzP+b73++OTPzzYIFCxYsWJhl2EimmJVx9hLgPT18wC/qvIQHJe5lHBeVHCNVL+DVDLj/I+Mxx5mvFvB2BgUoKHioImu6gL4ZFqCg8IyCPwI+zoIAhU62Tgn4MisCFFpYDWDHHuclGAnbuYATbAyyJE4uJqjChR1wsIG9Oj/fKaURhgwD5cONX9AexIsbL0EDWze7ws6c7KFZx67E4Yw4BR6e0EobI6yggG3kMifUM85zGmjFSxKFHCCfhKjR8NPIG25wSNVazCYYEarv5TQLplFTOEU7CgqvKCN5Wk8q5QxEjcAkNtOjYkxQDmMC08/sFTxFBnXcI1vXbuOkcCL1AqBcw6kHt8D0SoRALmGZsN3OVUkBBfxQcbrs2HSkIWojCPjGV2F7kBq+RX0PAFy8U9VTRAJ6eSM12HR081qK52ZEVV8sEuBlwrQAP+NSvCTmqeoOkYAEHKYF2ATjiJDGKlV9RLQLpGtIMkhhqRQvU7MffhdFYDn5pgXkkiHBsrOPRFXLO5EAJ0dJMuU+kdLwPmmEHZxQ1YM0QUCwgoc5YkpACaMS+0A2LRpGH1uIcJy0sc5E+LuibsXJnOCFjlGBw0Ywwvt7lzN8knC/kQqKhD0TXOclNhJZyEEKdZPUTwlPMDhOb7MiqvssHsWYEQW4PPnoRid6bZQFuZaHMadkNVN3hIAhrY41Bu4fxOz+HulTw/ijUO+rs/gwMmN+eh/VkwmpnACFJnJ07tfTGKP7Pi6qEhp8EkbPNXtjNs0xuPbj4ho52lXnlTLuZGfYYgtPpWyC+Angw8MQbVRzjrWiDPSXpP5e9gNQRIekxXvOcpLD7CaPRZFP2FHJ4RQ+cIoSTVppVNpFl3E9hk3MopufJthNmuRDCDtuGZUhzNXe7Q0xiE9GQL+JIc2hQ/yXjFbAHZS4uB/gjhwxD1eMW4pxuSmfWZYJb0d/V55JpWghJHCe/n/o3E8DebLObaE3oYhz7CbNIGxK+DvyL/DQST23GDQnAMBJJjmsDOUHQQh9T+ULQd1H1DJKN2PywbdgwYIFC/8BfgOoCejMt+kv6wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xNlQxMToxMjoyNSswMDowMACYcDAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTZUMTE6MTI6MjUrMDA6MDBxxciMAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjc2NTQ1OTQ14l6OBQAAABJ0RVh0VGh1bWI6OlNpemUAOTUwMkJC9h0QPgAAAEV0RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2L1hjQ3Bmd3ovMzkxMi9rb2ZpX2xvZ29faWNvbl8yNDc4OTQucG5nH4ex2wAAAABJRU5ErkJggg==&logoColor=white" alt="Buy Me A Coffee" height="41" width="174">
</a>

"Environment Variables" is a DevOps Pipeline task extension to create or override 'Environment Variables' with dynamic/custom values/paths based on tasks or static data.

Sometimes there is a need to create or override an environment variable during build either based on a task, maybe override a var created by another task or create a new cache restore directory env var.

# Installation

Installation can be done using [Visual Studio MarketPlace](https://marketplace.visualstudio.com/items?itemName=hey24sheep.envar). Just login to your Azure DevOps Org and click on "Get it free" button and follow the installation process.

# How to use

To use the task, go to your pipeline -> build definition and add "Environment Variables" to your build definition.

## Config

- `Environment Variables (comma separated)` : Set environment variable `key=value` (`separated by ','`). Example input like "`webpack=$(Pipeline.Workspace)/sdks/webpack, flutterToolPath=cacheFolder/flutter, isProd=true, flavor=prod-internal, arg1=something`". Note : Do not use spaces in name.

You can use the variable just like any other variable like `$(webpack)`, `$(isProd)`.

## More

Check out my other useful **Flutter** packages on [pub.dev](https://pub.dev/publishers/hey24sheep.com/packages)
or more **DevOps** extensions on [marketplace](https://marketplace.visualstudio.com/publishers/Hey24sheep)

# Rate the extension

<p>
Don't forget to rate the extension if you find it useful
</p>

# Support

<p>
PRs are always welcome. Feel free to create an issue if you have any issues.
</p>

<p>Don't forget to star this repo, thanks 👍</p>

## License

[MIT](https://github.com/hey24sheep/azure-environment-variables/blob/main/LICENSE)
