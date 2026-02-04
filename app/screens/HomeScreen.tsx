import React, { FC } from "react"
import { View, ViewStyle, ImageStyle, TextStyle, TouchableOpacity } from "react-native"

import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { Icon } from "@/components/Icon"
import { useNavigation } from "@react-navigation/native"

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = function HomeScreen() {
  const { themed, theme } = useAppTheme()
  const $bottomInsets = useSafeAreaInsetsStyle(["bottom"])
  const navigation = useNavigation()

  // static demo data for MVP
  const cards = [
    { title: "Sobra", amount: "-R$ 550,25" },
    { title: "Recebido", amount: "R$ 3.525,20" },
    { title: "Gasto Planejado", amount: "R$ 3.000,00" },
    { title: "Gasto Real", amount: "R$ 3.875,75" },
  ]

  return (
    <Screen preset="fixed" contentContainerStyle={themed($container)}>
      <Text style={themed($title)} preset="heading">Minhaeiro</Text>

      <View style={themed($grid)}>
        {cards.map((c, i) => (
          <View key={i} style={themed($card)}>
            <View style={themed($cardIconPlaceholder)} />
            <Text style={themed($cardTitle)}>{c.title}</Text>
            <Text style={themed($cardAmount)}>{c.amount}</Text>
          </View>
        ))}
      </View>

      <View style={themed($chartContainer)}>
        <Text style={themed($sectionTitle)}>Despesas por categoria</Text>

        <View style={themed($categoryRow)}>
          {/* header: A1 empty */}
          <View style={themed($colName)} />
          <View style={themed($colMonth)}>
            <Text style={themed($colHeaderText)}>Out</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colHeaderText)}>Nov</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colHeaderText)}>Dez</Text>
          </View>
        </View>
        {/* line 2 */}
        <View style={themed($categoryRow)}>
          <View style={themed($colName)}>
            <Text style={themed($categoryName)}>Aluguel</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 300</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 500</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 600</Text>
          </View>
        </View>
        {/* line 3 */}
        <View style={themed($categoryRow)}>
          <View style={themed($colName)}>
            <Text style={themed($categoryName)}>Água</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 300</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 500</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 600</Text>
          </View>
        </View>
        {/* line 4 */}
        <View style={themed($categoryRow)}>
          <View style={themed($colName)}>
            <Text style={themed($categoryName)}>Cartão de crédito</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 10.215,89</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 100.465,43</Text>
          </View>
          <View style={themed($colMonth)}>
            <Text style={themed($colValueText)}>R$ 90060,24</Text>
          </View>
        </View>
      </View>

      <View style={themed([$bottomBar, $bottomInsets])}>
        <TouchableOpacity style={themed($barButton)}>
          <Icon icon="menu" size={24} color={theme.colors.palette.neutral700} />
        </TouchableOpacity>

        <TouchableOpacity
          style={themed($barButton)}
          onPress={() => (navigation as any).navigate?.("TransactionForm")}
        >
          <Icon icon="more" size={24} color={theme.colors.palette.neutral700} />
        </TouchableOpacity>

        <TouchableOpacity style={themed($barButton)}>
          <Icon icon="community" size={24} color={theme.colors.palette.neutral700} />
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const $container: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flex: 1,
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.lg,
})

const $title: ThemedStyle<TextStyle> = ({ spacing }) => ({
  alignSelf: "center",
  marginBottom: spacing.md,
})

const $grid: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start",
})

const $card: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  flexBasis: "48%",
  maxWidth: "48%",
  flexGrow: 0,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 12,
  padding: spacing.md,
  marginBottom: spacing.md,
  justifyContent: "space-between",
})

const $cardIconPlaceholder: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  width: 28,
  height: 18,
  borderRadius: 4,
  backgroundColor: "rgba(0,0,0,0.05)",
  marginBottom: spacing.sm,
})

const $cardTitle: ThemedStyle<TextStyle> = ({ spacing }) => ({
  fontSize: 14,
  marginBottom: spacing.xs,
})

const $cardAmount: ThemedStyle<TextStyle> = ({ spacing }) => ({
  fontSize: 18,
  fontWeight: "700",
})

const $chartContainer: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  marginTop: spacing.md,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 20,
  padding: spacing.lg,
  flex: 1,
  justifyContent: "flex-start",
})

const $sectionTitle: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.md,
  fontWeight: "700",
})

const $categoryRow: ThemedStyle<ViewStyle> = ({}) => ({
  flexDirection: "row",
  justifyContent: "space-between",
})

const $categoryName: ThemedStyle<TextStyle> = ({}) => ({
  fontSize: 14,
  marginBottom: 6,
})

// column sizing for table-like layout
const $colName: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexBasis: "25%",
  maxWidth: "25%",
  paddingRight: spacing.md,
  justifyContent: "center",
})

const $colMonth: ThemedStyle<ViewStyle> = ({}) => ({
  flexBasis: "25%",
  maxWidth: "25%",
  alignItems: "flex-end",
  justifyContent: "center",
})

const $colHeaderText: ThemedStyle<TextStyle> = ({}) => ({
  fontSize: 14,
  fontWeight: "700",
  textAlign: "right",
})

const $colValueText: ThemedStyle<TextStyle> = ({}) => ({
  fontSize: 12,
  fontWeight: "700",
  textAlign: "right",
})

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

const $addButton: ThemedStyle<ViewStyle> = ({ colors }) => ({
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  borderTopLeftRadius: 28,
  borderTopRightRadius: 28,
  backgroundColor: colors.palette.neutral100,
})
