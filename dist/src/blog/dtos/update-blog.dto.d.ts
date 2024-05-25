import CreateBlogDto from "./create-blog.dto";
declare const UpdateBlogDto_base: import("@nestjs/common").Type<Partial<CreateBlogDto>>;
declare class UpdateBlogDto extends UpdateBlogDto_base {
}
export default UpdateBlogDto;
