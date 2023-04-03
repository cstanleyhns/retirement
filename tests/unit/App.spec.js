import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Countdown to Retirement1825 days left until retirement261 weeks left until retirement'
    const wrapper = shallowMount(App, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})