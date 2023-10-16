import React from 'react'
import {TMasterContainer} from '@/types'
import * as Styles from './styles'

export function MasterContainer({children}: TMasterContainer){
    return(        
        <Styles.SafeAreaView>
            { children }
        </Styles.SafeAreaView>
    )
}