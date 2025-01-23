import { Content } from '../../../../_metronic/layout/components/content'
import {

  ChartsWidget1,

} from '../../../../_metronic/partials/widgets'

export function Overview() {
  return (
    <Content>
      <div className='row g-5 g-xxl-8'>

        <div className='col-xl-6'>
          <ChartsWidget1 className='mb-5 mb-xxl-8' />
        </div>
      </div>
    </Content>
  )
}
