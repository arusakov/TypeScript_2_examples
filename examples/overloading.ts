//
// part 1
//

interface Overloads {
    createElement(tagName: 'a'): HTMLAnchorElement
    // ...
    createElement(tagName: string): HTMLElement


    addEventListener(
        type: 'keydown',
        listener: (this: this, ev: KeyboardEvent) => any,
        useCapture?: boolean): void
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        useCapture?: boolean): void
}