import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle:{
    textAlign: "center",
    fontWeight: '700',
    fontSize: 19,
    marginTop: 14,
    color: theme.light.colors.primary,
  },
  headerDescription:{
    color: '#041A36',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 14,
  },
  iconContainer:{
    marginTop: 0,
  },
  InvestmentList:{
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: theme.light.colors.background,
    marginTop: 10,
  },
});
