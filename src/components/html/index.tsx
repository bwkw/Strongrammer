import { VFC } from 'react'

import Grid from '@mui/material/Grid'

import BackButton from 'components/elements/Button/back'
import LinkButton from 'components/elements/Button/link'

const Index: VFC = () => {
  return (
    <>
      <BackButton url={'/'} />
      <Grid item container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <h1>HTML</h1>
          <LinkButton url="/html/tag" letter="タグ" />
        </Grid>
      </Grid>
    </>
  )
}

export default Index