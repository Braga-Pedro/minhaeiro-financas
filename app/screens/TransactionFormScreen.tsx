import React, { FC, useState } from "react"
import { View, ViewStyle, TouchableOpacity } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { ListItem } from "@/components/ListItem"
import { Button } from "@/components/Button"
import { Checkbox } from "@/components/Toggle/Checkbox"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { useNavigation } from "@react-navigation/native"
import { Icon } from "@/components/Icon"
import { BottomNav } from "@/components/BottomNav"

interface TransactionFormProps extends AppStackScreenProps<"TransactionForm"> {}

export const TransactionFormScreen: FC<TransactionFormProps> = function TransactionFormScreen({
  navigation,
}) {
  
  const { themed, theme } = useAppTheme()

  const [type, setType] = useState<string>("despesa")
  const [period, setPeriod] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [onlyThisMonth, setOnlyThisMonth] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const $bottomInsets = useSafeAreaInsetsStyle(["bottom"])
  const navigationBar = useNavigation()

  function submit() {
    // MVP: apenas volta para a Home. Aqui você pode integrar com store/API.
    navigation.goBack()
  }

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)}>
      <Text preset="heading" style={themed($title)}>Minhaeiro</Text>

      <ListItem
        text="Tipo"
        containerStyle={themed($label)}
        RightComponent={
          <View style={themed($typeSelectorRow)}>
            <TouchableOpacity
              onPress={() => setType("receita")}
              style={themed(type === "receita" ? $optionSelected : $option)}
            >
              <Text style={themed(type === "receita" ? $optionTextSelected : $optionText)}>
                Receita
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setType("despesa")}
              style={themed(type === "despesa" ? $optionSelected : $option)}
            >
              <Text style={themed(type === "despesa" ? $optionTextSelected : $optionText)}>
                Despesa
              </Text>
            </TouchableOpacity>
          </View>
        }
      />

      <Text style={themed($label)}>Período / mês</Text>
      <TextField placeholder="MM/YYYY" value={period} onChangeText={setPeriod} />

      <Text style={themed($label)}>Categoria</Text>
      <TextField placeholder="Categoria" value={category} onChangeText={setCategory} />

      <View style={themed($checkboxRow)}>
        <Checkbox on={onlyThisMonth} onChange={() => setOnlyThisMonth((s) => !s)} />
        <Text style={themed($checkboxLabel)}>Categoria válida somente este mês?</Text>
      </View>

      <Text style={themed($label)}>Valor</Text>
      <TextField placeholder="R$ 0,00" value={value} onChangeText={setValue} />

      <Button tx="common:ok" style={themed($submitButton)} onPress={submit} />
      
      {/* menu footer bar navigation */}
      <BottomNav items={[{ route: "Home", icon: "caretLeft" }]} />
      
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flex: 1,
  padding: spacing.lg,
  justifyContent: "flex-start",
})

const $title: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
}) as any

const $label: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.md,
  marginBottom: spacing.xs,
}) as any

const $checkboxRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm as any,
})

const $checkboxLabel: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginLeft: spacing.sm,
}) as any

const $submitButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.lg,
})

const $typeSelectorRow: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.sm as any,
})

const $option: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.md,
  borderRadius: 6,
  backgroundColor: colors.palette.neutral100,
})

const $optionSelected: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  paddingVertical: spacing.xs,
  paddingHorizontal: spacing.md,
  borderRadius: 6,
  backgroundColor: colors.palette.secondary500,
})

const $optionText: ThemedStyle<ViewStyle> = ({ colors }) => ({
  color: colors.text,
}) as any

const $optionTextSelected: ThemedStyle<ViewStyle> = ({ colors }) => ({
  color: colors.palette.accent100,
}) as any

const $bottomBar: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  height: 64,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  backgroundColor: colors.palette.neutral100,
})

const $barButton: ThemedStyle<ViewStyle> = ({}) => ({
  padding: 12,
})

export default TransactionFormScreen
