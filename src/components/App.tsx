import { css } from '@emotion/css';
import { createSignal } from 'solid-js';
import { data } from './data';
import { Graph } from './Graph';
import { Inspector } from './Inspector';

const styles = css`
  height: 100svh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const inspectorStyles = css``;

export function ref<T extends HTMLElement>() {
  return null as any as T;
}

export function App() {
  const inspecting = createSignal(false);

  return (
    <div class={styles}>
      <Inspector />
      <Graph data={data} />
    </div>
  );
}
