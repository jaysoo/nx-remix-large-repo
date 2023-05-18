import { ui } from '@nx-remix/ui';
import { fn1 } from '@nx-remix/lib-1'
import { fn1000 } from '@nx-remix/lib-5'
import { fn999 } from '@nx-remix/lib-4'
import { fn998 } from '@nx-remix/lib-3'
export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <p>{ui()}</p>
      <p>{fn1()}</p>
      <p>{fn1000()}</p>
      <p>{fn999()}</p>
      <p>{fn998()}</p>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
