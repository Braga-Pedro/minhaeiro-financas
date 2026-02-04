import React, { FC, useState } from "react"
import { View, ViewStyle } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { TextField } from "@/components/TextField"
import { Button } from "@/components/Button"
import { Checkbox } from "@/components/Toggle/Checkbox"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"

interface TransactionFormProps extends AppStackScreenProps<"TransactionForm"> {}

export const TransactionFormScreen: FC<TransactionFormProps> = function TransactionFormScreen({
  navigation,
}) {
  const { themed } = useAppTheme()

  const [type, setType] = useState<string>("despesa")
  const [period, setPeriod] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [onlyThisMonth, setOnlyThisMonth] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  function submit() {
    // MVP: apenas volta para a Home. Aqui você pode integrar com store/API.
    navigation.goBack()
  }

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)}>
      <Text preset="heading" style={themed($title)}>Minhaeiro</Text>

      <Text style={themed($label)}>Tipo (receita/despesa)</Text>
      <TextField
        placeholder="Receita ou Despesa"
        value={type}
        onChangeText={setType}
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

export default TransactionFormScreen
