import React from 'react';
import { Stack, Banner } from '@primer/react/drafts'
import { ShieldLockIcon } from '@primer/octicons-react';
import styles from './App.module.css';

function App() {
  // --- Popover support in React WIP :/ ---
  // React is still implementing popover support, PR is open and this branch references a build of it
  // https://github.com/facebook/react/issues/27479
  // https://github.com/facebook/react/pull/27981

  return (
    
    <div className="p-5">
    <Stack gap="normal">
      <Banner title="Managed settings" hideTitle variant="info" description={<>
        Some settings on this page can’t be changed because they’re managed by administrators.
        </>} secondaryAction={<Banner.SecondaryAction>Learn more</Banner.SecondaryAction>}/>
      <div>
      <div className={styles.card}>
        <Stack gap="condensed" direction="horizontal" justify="space-between" align="center">
          <div className={styles.textContainer}>
            <h3>Stuff</h3>
            <p>Stuff</p>
          </div>
          <div>
          <button popovertargetaction="toggle" popovertarget="my-popover" className={styles.readOnlyValue}  >
            <ShieldLockIcon fill="var(--fgColor-muted)" />
            <span>Enabled</span>
          </button>
          <div popover="auto" id="my-popover" className={styles.popover}>
            <div className={styles.popoverContent}>
              <span>This is managed by GitHub</span>
            </div>
            </div>
          </div>
        </Stack>
      </div>
      </div>
    </Stack>
    </div>
  );
}

export default App;