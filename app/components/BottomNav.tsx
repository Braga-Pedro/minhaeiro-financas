import React, { FC } from "react"
import { View, TouchableOpacity, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { Icon, IconTypes } from "@/components/Icon"

export interface BottomNavItem {
  route: string
  icon?: IconTypes
  label?: string
}

interface BottomNavProps {
  items: BottomNavItem[]
  style?: ThemedStyle<ViewStyle> | ViewStyle
}

export const BottomNav: FC<BottomNavProps> = function BottomNav({ items, style }) {
  const navigation = useNavigation()
  const { themed, theme } = useAppTheme()
  const $bottomInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={themed([$bottomBar, $bottomInsets, style as any])}>
      {items.map((it, i) => (
        <TouchableOpacity
          key={i}
          style={themed($barButton)}
          onPress={() => (navigation as any).navigate?.(it.route)}
        >
          <Icon icon={it.icon ?? "caretRight"} size={24} color={theme.colors.palette.neutral700} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const $bottomBar: ThemedStyle<ViewStyle> = ({ spacing, colors }) => ({
  height: 64,
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  backgroundColor: colors.palette.neutral100,
  zIndex: 20,
  paddingHorizontal: spacing.md,
})

const $barButton: ThemedStyle<ViewStyle> = ({}) => ({
  padding: 12,
})

export default BottomNav
