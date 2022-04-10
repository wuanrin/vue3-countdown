import Countdown from 'vue3-countdown'
import AppButton from '@/components/AppButton'
import SourceCode from '@/components/SourceCode'
import DemoBlock from '@/components/DemoBlock'

export function setupGlobalComponents (app) {
  app.component(Countdown.name, Countdown)
  app.component(AppButton.name, AppButton)
  app.component(SourceCode.name, SourceCode)
  app.component(DemoBlock.name, DemoBlock)
}
