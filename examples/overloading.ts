//
// part 1
//

document.createElement('a') // HTMLAnchorElement
document.createElement('div') // HTMLDivElement

interface Overloads {
    createElement(tagName: 'a'): HTMLAnchorElement
    // ...
    createElement(tagName: string): HTMLElement
}