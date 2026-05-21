import { useState, useCallback } from "react";
import { Button } from "../../atoms/button";
import { Dialog } from "../dialog";
import type { DestructiveActionButtonProps } from "./destructive-action-button.type";

export function DestructiveActionButton({
  label,
  onConfirm,
  requireConfirm = true,
  confirmTitle = "Are you sure?",
  confirmBody,
  loading = false,
  disabled = false,
  testID,
}: DestructiveActionButtonProps) {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handlePress = useCallback(() => {
    if (requireConfirm) {
      setDialogVisible(true);
    } else {
      onConfirm();
    }
  }, [requireConfirm, onConfirm]);

  const handleConfirm = useCallback(() => {
    setDialogVisible(false);
    onConfirm();
  }, [onConfirm]);

  const handleDismiss = useCallback(() => {
    setDialogVisible(false);
  }, []);

  return (
    <>
      <Button
        variant="filled"
        onPress={handlePress}
        disabled={disabled || loading}
        backgroundColor="$error"
        color="$onError"
        testID={testID}
      >
        {label}
      </Button>

      {requireConfirm && (
        <Dialog
          visible={dialogVisible}
          title={confirmTitle}
          confirmLabel={label}
          dismissLabel="Cancel"
          onConfirm={handleConfirm}
          onDismiss={handleDismiss}
          testID={testID ? `${testID}-dialog` : undefined}
        >
          {confirmBody}
        </Dialog>
      )}
    </>
  );
}
