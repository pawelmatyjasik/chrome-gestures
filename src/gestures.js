export function isHorizontalSwipe(deltaX, deltaY) {
    return Math.abs(deltaY) < 0.1 && Math.abs(deltaX) > 1;
}

export function isForward(deltaX) {
    return deltaX > 0;
}