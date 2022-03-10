import { Link } from "@mui/material";

export interface NotFoundProps {}

export function NotFound(props: NotFoundProps) {
  return <Link href="http://localhost:3000/admin">Page Not Found</Link>;
}
