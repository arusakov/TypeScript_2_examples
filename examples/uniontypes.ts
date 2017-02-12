//
// part 1
// 

// useful for API

declare namespace X1 {
    type Webpage = { /* */ }
    type File = { /* */ }

    interface IMedia {
        type: 'webpage' | 'file'
        webpage?: Webpage
        file?: File
    }
}


//
// part 2
//

namespace X {
    type Webpage = { /* */ }
    type File = { /* */ }

    type MediaFile = { type: 'file', file: File }
    type MediaWebpage = { type: 'webpage', webpage: Webpage }

    type MediaType = MediaFile | MediaWebpage

    declare const m: MediaType
    if (m.type == 'file') {
        m.webpage   // ERROR
        m.file      // OK
    }
}