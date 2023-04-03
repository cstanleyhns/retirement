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

  it('returns the corect number of days until retirement', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.daysLeft).toBe(1825)
  })

  it('returns the corect number of weeks until retirement', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.vm.weeksLeft).toBe(261)
  })

})