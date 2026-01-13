import os

# 指定要删除的图片编号列表
image_numbers_to_delete = [2, 6, 27, 29, 36, 48, 50, 53, 54, 65, 68, 79, 88, 94, 117, 119, 138, 139, 141, 145, 147, 148, 149, 155, 174, 7, 9, 21, 57, 71, 90, 108, 109, 110, 111, 112, 114, 165, 166]

# 获取当前目录下的所有文件
current_directory = os.getcwd()

# 遍历要删除的编号
deleted_count = 0
for number in image_numbers_to_delete:
    # 构造文件名（支持常见的图片格式）
    for ext in ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']:
        filename = f"{number}{ext}"
        filepath = os.path.join(current_directory, filename)
        
        if os.path.exists(filepath):
            try:
                os.remove(filepath)
                print(f"已删除文件: {filename}")
                deleted_count += 1
            except Exception as e:
                print(f"删除文件 {filename} 时出错: {e}")

print(f"\n总共删除了 {deleted_count} 个文件")