// 简单的 React 类型声明，解决本地没有 @types/react 时的提示
declare module 'react' {
  export = React;
  namespace React {
    export type FC<P = {}> = (props: P) => any;
    export type ReactNode = any;
    export type FormEvent<T = HTMLElement> = any;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export const createRoot: any;
}

// 让 JSX 语法中的标签不过报错
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


