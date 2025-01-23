import {FC} from 'react'
import {
  // TablesWidget1,
  // TablesWidget2,
  // TablesWidget3,
  // TablesWidget4,
  // TablesWidget5,
  // TablesWidget6,
  // TablesWidget7,
  // TablesWidget8,
  // TablesWidget9,
  // TablesWidget10,
  // TablesWidget11,
  // TablesWidget12,
  TablesWidget13,
} from '../../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../../_metronic/layout/components/toolbar'
import { Content } from '../../../../_metronic/layout/components/content'

const Tables: FC = () => {
  return (
    <>
      <ToolbarWrapper />
      <Content>


        <TablesWidget13 className='mb-5 mb-xl-8' />
      </Content>
    </>
  )
}

export {Tables}
