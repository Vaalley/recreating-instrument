export default function onScrollActivate(node) {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            node.classList.add('appear');

            intersectionObserver.disconnect();
        }
    });
    intersectionObserver.observe(node);

    return {
        destroy() {
            intersectionObserver.disconnect();
        }
    }
}