export default function onScrollTranslateY(node) {
    // when user scrolls DOWN add class 'translate-y-[0px]'
    // when user scrolls UP add class 'translate-y-[-119px]'
    const intersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            node.classList.add('translate-y-0');
        } else {
            node.classList.remove('translate-y-0');
        };
    });
    intersectionObserver.observe(node);

    return {
        destroy() {
            intersectionObserver.disconnect();
        }
    }
}
