import React from "react";
import { Button, Link, Popover } from "@primer/react";
import { Stack, Banner } from "@primer/react/drafts";
import { ShieldLockIcon, XIcon } from "@primer/octicons-react";
import styles from "./App.module.css";

function App() {
  const [popoverIsOpen, setPopoverIsOpen] = React.useState(false);
  // --- Popover support in React WIP :/ ---
  // React is still implementing popover support, PR is open and this branch references a build of it
  // https://github.com/facebook/react/issues/27479
  // https://github.com/facebook/react/pull/27981

  return (
    <div className="p-5 mx-auto" style={{ maxWidth: 800 }}>
      <Stack gap="normal">
        <Banner
          title="Managed settings"
          hideTitle
          variant="info"
          description={
            <>
              Some settings on this page can’t be changed because they’re
              managed by administrators.
            </>
          }
          secondaryAction={
            <Banner.SecondaryAction>Learn more</Banner.SecondaryAction>
          }
        />
        <div className={styles.card}>
          <Stack
            gap="condensed"
            direction="horizontal"
            justify="space-between"
            align="center"
          >
            <div className={styles.textContainer}>
              <h3>Popover using native HTML and styling</h3>
              <p>Stuff</p>
            </div>
            <div>
              <button
                popovertargetaction="toggle"
                popovertarget="my-popover"
                className={styles.readOnlyValue}
              >
                <ShieldLockIcon fill="var(--fgColor-muted)" />
                <span>Enabled</span>
              </button>
              <div popover="auto" id="my-popover" className={styles.popover}>
                <div className={styles.popoverContent}>
                  <span className="f6">
                    This value is managed by <Link href="#">GitHub</Link> and
                    can't be changed
                  </span>
                </div>
              </div>
            </div>
          </Stack>
        </div>
        <div className={styles.card}>
          <Stack
            gap="condensed"
            direction="horizontal"
            justify="space-between"
            align="center"
          >
            <div className={styles.textContainer}>
              <h3>Popover using existing Primer component</h3>
              <p>Stuff</p>
            </div>
            <div>
              <button
                className={styles.readOnlyValue}
                onClick={() => setPopoverIsOpen(!popoverIsOpen)}
              >
                <ShieldLockIcon fill="var(--fgColor-muted)" />
                <span>Enabled</span>
              </button>

              <Popover open={popoverIsOpen} caret="bottom">
                <Popover.Content className={styles.primerPopoverContent}>
                  <span>
                    This value is managed by <Link href="#">GitHub</Link> and
                    can't be changed
                  </span>
                  <Button
                    size="small"
                    onClick={() => setPopoverIsOpen(false)}
                    sx={{ mt: 2 }}
                  >
                    Done
                  </Button>
                </Popover.Content>
              </Popover>
            </div>
          </Stack>
        </div>
      </Stack>
    </div>
  );
}

export default App;
