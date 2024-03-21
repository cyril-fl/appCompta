import { Flux } from './flux.js';
// import { Panel } from './panel.js';
import { Page } from './page.js';
import { File } from './fileSystem.js';

// import { Flux } from './flux.js';


//faire une verrife sinon nouvelle save et load


let file = new File;
    // file.loadFile();
    // file.saveFile();

    let pageCurrent = file.init();
        // document.body.appendChild(file.pageNav());
            document.body.appendChild(pageCurrent);

    


