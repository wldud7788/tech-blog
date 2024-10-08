import { createClient } from "@/utils/supabase/server";
const Community = async () => {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div>
      <h1>슈퍼베이스에 입력된 정보 불러오기</h1>
      <ul>{notes?.map((note) => <li key={note.id}>{note.title}</li>)}</ul>
    </div>
  );
};

export default Community;
