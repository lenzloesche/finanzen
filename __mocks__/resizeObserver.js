// I need to mock this, else the testing with jest errors: "window.ResizeObserver is not a constructor"

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
export default ResizeObserver;
