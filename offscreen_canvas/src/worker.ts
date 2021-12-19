(() => {
    console.log("worker_function loaded");
    // @ts-ignore
    window.worker_function = () => {
        self.onmessage = ({ data: { question } }) => {
            // @ts-ignore
            self.postMessage({
                answer: 42,
            });
        };
    }
})();
