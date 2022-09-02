import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
// import Controls from '../../components/controls'
// import CloseIcon from '@material-ui/icons/Close'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
// import './popup.css'

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props

  //   const classes = useStyles()
  return (
    <Dialog open={openPopup} maxWidth="sm">
      <DialogTitle>
        <div style={{ display: 'flex', float: 'right' }}>
          {/* <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            yes
          </Typography> */}
          <Button
            className="btn btn-denger btn-sm"
            color="secondary"
            onClick={() => {
              setOpenPopup(false)
            }}
          >
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}

Popup.propTypes = {
  children: PropTypes,
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes,
}
