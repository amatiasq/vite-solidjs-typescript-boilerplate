import { css } from '@emotion/css';

const styles = css`
  height: 100svh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function App() {
  return <div class={styles}>Hi</div>;
}
