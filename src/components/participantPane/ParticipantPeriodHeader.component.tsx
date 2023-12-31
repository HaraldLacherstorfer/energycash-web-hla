import React, {FC, useEffect, useState} from "react";
import {IonCheckbox, IonItem, IonSelect, IonSelectOption, SelectCustomEvent} from "@ionic/react";
import {MONTHNAME} from "../../models/eeg.model";
import {SelectedPeriod} from "../../models/energy.model";
import {getPeriodSegment, yearMonth} from "../../util/Helper.util";
import {IonCheckboxCustomEvent} from "@ionic/core/dist/types/components";
import {CheckboxChangeEventDetail} from "@ionic/core";

import "./ParticipantPeriodHeader.component.css"
import PeriodSelectorElement from "../core/PeriodSelector.element";
import {useAppSelector} from "../../store";
import {periodsSelector} from "../../store/energy";

interface ParticipantPeriodHeaderComponentProps {
  activePeriod: SelectedPeriod | undefined;
  selectAll: (event: IonCheckboxCustomEvent<CheckboxChangeEventDetail>) => void;
  onUpdatePeriod: (selectedPeriod: SelectedPeriod) => void;
}

const ParticipantPeriodHeaderComponent: FC<ParticipantPeriodHeaderComponentProps> = ({activePeriod, selectAll, onUpdatePeriod}) => {
  const periods = useAppSelector(periodsSelector);

  return (
    <div className={"fixed-header flex-row"} style={{marginBottom: "16px"}}>
      <IonItem lines="none">
        <IonCheckbox style={{"--size": "16px", margin: "0px"}} onIonChange={selectAll}> </IonCheckbox>
      </IonItem>
      <PeriodSelectorElement activePeriod={activePeriod} periods={periods} onUpdatePeriod={onUpdatePeriod} />
    </div>
  )
}
export default ParticipantPeriodHeaderComponent;
