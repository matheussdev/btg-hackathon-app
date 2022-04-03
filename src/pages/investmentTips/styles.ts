import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 19,
    marginTop: 14,
    color: theme.light.colors.primary,
  },
  headerDescription: {
    color: "#041A36",
    textAlign: "center",
    fontSize: 14,
    marginTop: 14,
  },
  iconContainer: {
    marginTop: 0,
  },
  InvestmentList: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: theme.light.colors.background,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: theme.light.colors.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    minWidth: 230,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
    fontWeight: '600'
  },
});
