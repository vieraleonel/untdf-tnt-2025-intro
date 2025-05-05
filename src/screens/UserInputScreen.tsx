import { Fragment, useState } from "react";
import { Button, Switch, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

import DateTimePickerModal from "react-native-modal-datetime-picker";

export function UserInputScreen() {
  const [texto, setTexto] = useState<string>("");
  const [pickerValue, setPickerValue] = useState<number>(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleResetPress = () => {
    setTexto("");
  };

  function handleAndroidChangeDate() {
    DateTimePickerAndroid.open({
      value: date,
      onChange: function (event, selectedDate) {
        setDate(selectedDate);
      },
      mode: "date",
      is24Hour: true,
    });
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={{ flex: 1, gap: 10, alignItems: "center" }}>
      <View>
        <Button title="Cambiar fecha" onPress={handleAndroidChangeDate} />
        <Text>{date?.toISOString()}</Text>
      </View>
      {/* <DateTimePicker mode="datetime" value={date} /> */}

      <View>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text>{date?.toISOString()}</Text>
      </View>

      <View style={{ height: 200 }}>
        <Picker<number>
          style={{ width: 200, height: 50 }}
          onValueChange={setPickerValue}
          selectedValue={pickerValue}
        >
          <Picker.Item label="Java" value={1} />
          <Picker.Item label="JavaScript" value={2} />
          <Picker.Item label="Python" value={3} />
          <Picker.Item label="C++" value={4} />
          <Picker.Item label="C#" value={5} />
        </Picker>
        <Text>{pickerValue}</Text>
      </View>

      <TextInput
        style={{
          backgroundColor: "lightgrey",
          width: 200,
          height: 100,
          fontSize: 30,
        }}
        autoCapitalize="none"
        autoFocus
        value={texto}
        inputMode="decimal"
        keyboardType="decimal-pad"
        onChangeText={setTexto}
      />
      <Text style={{ fontSize: 20 }}>Valor de mi texto: {texto}</Text>
      <Button title="Resetear valor" onPress={handleResetPress} />

      <View style={{ height: 10, backgroundColor: "black" }} />

      <Switch
        trackColor={{ false: "red", true: "green" }}
        ios_backgroundColor="red"
        thumbColor={isEnabled ? "lightgreen" : "gray"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <NewSlider />

      <Checkbox
        value={isEnabled}
        onValueChange={toggleSwitch}
        color={isEnabled ? "green" : "rojo"}
      />
    </SafeAreaView>
  );

  function NewSlider() {
    const [sliderValue, setSliderValue] = useState<number>(0);

    function handleSliderValueChange(value: number) {
      setSliderValue(parseFloat(value.toFixed(2)));
      console.log("Slider value: ", value);
    }

    function handleOnSlidingComplete(value: number) {
      console.log("On sliding complete: ", value);
    }

    function handleSliderValueManualChange(newValue: number) {
      return function () {
        setSliderValue(newValue);
      };
    }
    return (
      <Fragment>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderValueChange}
          onSlidingComplete={handleOnSlidingComplete}
          thumbTintColor="blue"
          minimumTrackTintColor="cyan"
          maximumTrackTintColor="black"
          StepMarker={(props) => {
            return props.stepMarked && props.currentValue === 50 ? (
              <Text>{props.currentValue}</Text>
            ) : null;
          }}
        />
        <Text>{sliderValue}</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button title="0" onPress={handleSliderValueManualChange(0)} />
          <Button title="0.25" onPress={handleSliderValueManualChange(0.25)} />
          <Button title="0.50" onPress={handleSliderValueManualChange(0.5)} />
          <Button title="1" onPress={handleSliderValueManualChange(1)} />
        </View>
      </Fragment>
    );
  }
}
