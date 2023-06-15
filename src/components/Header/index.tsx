import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/index'

import background from '@assets/bkgd.png'
import {
  Background,
  Content,
  KWpInfo,
  RowContent,
  TextKWp,
  TextValueKWp,
  UpdateInfo,
  Climate,
  Location,
  ClimateView,
  LocationView,
  Icon,
} from './styles'

import { useEffect, useState } from 'react'
import { DateProps } from '@utils/types/date'
import { HeaderProps } from '@utils/types/header'

export function Header({ locale, kwhToday }: HeaderProps) {
  const [date, setDate] = useState<DateProps>()
  const [degreesCelsius, setDegreesCelsius] = useState<number>()

  function handleFormatCelcius(kelvin: number) {
    setDegreesCelsius(parseInt('10', kelvin - 273.15))
  }

  function handleFormatDate(date: Date) {
    const day = format(date, 'dd', {
      locale: ptBR,
    })

    const month = format(date, 'MMMM', {
      locale: ptBR,
    })

    const year = format(date, 'yyyy', {
      locale: ptBR,
    })

    const hour = format(date, 'k', {
      locale: ptBR,
    })

    const minute = format(date, 'm', {
      locale: ptBR,
    })

    setDate({ day, month, year, hour, minute })
  }

  useEffect(() => {
    if (locale) {
      handleFormatDate(locale.update)
      handleFormatCelcius(locale.temp)
    }
  }, [locale])

  return (
    <Background source={background}>
      <Content>
        <LocationView>
          <Icon name="map-marker" />
          <Location>
            {locale?.locale}, {locale?.country}
          </Location>
        </LocationView>

        <RowContent>
          <KWpInfo>
            <TextValueKWp>{kwhToday}</TextValueKWp>
            <TextKWp>KWh</TextKWp>
          </KWpInfo>
          <ClimateView>
            <Climate>{degreesCelsius}º c</Climate>
          </ClimateView>
        </RowContent>
      </Content>
      <UpdateInfo>
        Última atualização {date?.day} de {date?.month} de {date?.year}, às{' '}
        {date?.hour}:{date?.minute}
      </UpdateInfo>
    </Background>
  )
}
