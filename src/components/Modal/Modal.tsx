import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  hideClose: boolean
  onClose: any // (e: object, reason: 'escapeKeyDown' | 'backdropClick') => void
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, hideClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {!hideClose && (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  )
}

type TProps = {
  isOpen: boolean
  hideClose: boolean
  onSuccess: () => void
  title: string
  body: JSX.Element
  buttonText: string
}

export default function CustomModal({
  isOpen,
  hideClose,
  onSuccess,
  title,
  body,
  buttonText,
}: TProps) {
  const [open, setOpen] = React.useState(!!isOpen)

  React.useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = (e?: object, reason?: 'escapeKeyDown' | 'backdropClick') => {
    if (reason !== 'backdropClick') {
      setOpen(false)
      onSuccess?.()
    }
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth
        disableEscapeKeyDown
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
          hideClose={hideClose}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>{body}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {buttonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
