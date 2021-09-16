import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import { MOBILE_VIEW_BREAKPOINT, StyledIconButton } from '../../../utils/utils'

function AvatarIconButton({ setAnchorAvatarButton }) {
  return (
    <StyledIconButton
      onClick={(event) => setAnchorAvatarButton(event.currentTarget)}
    >
      <StyledAvatar>C</StyledAvatar>
    </StyledIconButton>
  )
}

export default AvatarIconButton

const StyledAvatar = styled(Avatar)`
  && {
    @media screen and (max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
      width: 24px;
      height: 24px;
    }
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
    background-color: #ef6c00;
  }
`
