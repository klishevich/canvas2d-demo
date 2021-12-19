async function run() {
    console.log('run()');

    // const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    // const ctx = canvas.getContext('2d');
    //
    // const path1 = new Path2D();
    // path1.rect(10, 10, 100, 100);
    //
    // ctx.stroke(path1);

    // const blobURL = URL.createObjectURL(
    //     new Blob(
    //         [
    //             `
    //             self.onmessage = ({ data: { question } }) => {
    //                 self.postMessage({
    //                     answer: 42,
    //                 });
    //             };`
    //             ],
    //             { type: "application/javascript" }
    //         )
    //     );
    // const worker = new Worker(blobURL);

    const worker = new Worker(
        // @ts-ignore
        URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], { type: 'text/javascript' }))
    );

    worker.postMessage({
        question: 'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
    });
    worker.onmessage = ({ data: { answer } }) => {
        console.log(answer);
    };
}

run();
