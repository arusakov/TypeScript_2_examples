//
// part 1
// 

// useful for API

type Webpage = any

interface Data {
    type: 'file' | 'webpage'
    webpage?: Webpage
    file?: File
}

//
// part 2
//

namespace X {
    type MediaFile = { type: 'file', file: File }
    type MediaWebpage = { type: 'webpage', webpage: Webpage }

    type Media = MediaFile | MediaWebpage

    declare const m: Media
    if (m.type == 'file') {
        m.webpage   // ERROR
        m.file      // OK
    }
}